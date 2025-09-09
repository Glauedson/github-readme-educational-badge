import https from 'https';
import http from 'http';

// Cache 
const imageCache = new Map();
const CACHE_DURATION = 30 * 60 * 1000; // 30 min

const REQUEST_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br'
};

const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
const REQUEST_TIMEOUT = 10000; // 10 seg

export async function fetchImageAsBase64(url) {
  if (!isValidUrl(url)) return null;

  const cached = getFromCache(url);
  if (cached) return cached;

  try {
    const imageData = await downloadImage(url);
    if (imageData) {
      saveToCache(url, imageData);
    }
    return imageData;
  } catch (error) {
    console.warn('Falha ao baixar imagem:', url, error.message);
    return null;
  }
}

function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function getFromCache(url) {
  const cached = imageCache.get(url);
  if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

function saveToCache(url, data) {
  imageCache.set(url, {
    data,
    timestamp: Date.now()
  });
}

async function downloadImage(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https:') ? https : http;
    
    const request = client.get(url, {
      headers: REQUEST_HEADERS,
      timeout: REQUEST_TIMEOUT
    }, (res) => {
      
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location).then(resolve).catch(() => resolve(null));
      }
      
      if (res.statusCode !== 200) {
        resolve(null);
        return;
      }

      const contentType = res.headers['content-type'] || '';
      if (!contentType.startsWith('image/')) {
        resolve(null);
        return;
      }

      processImageStream(res, contentType, resolve);
    });

    request.on('error', () => resolve(null));
    request.on('timeout', () => {
      request.destroy();
      resolve(null);
    });
    
    request.setTimeout(REQUEST_TIMEOUT);
  });
}

function processImageStream(stream, contentType, callback) {
  const chunks = [];
  let totalSize = 0;

  stream.on('data', (chunk) => {
    totalSize += chunk.length;
    if (totalSize > MAX_IMAGE_SIZE) {
      stream.destroy();
      callback(null);
      return;
    }
    chunks.push(chunk);
  });

  stream.on('end', () => {
    try {
      const buffer = Buffer.concat(chunks);
      const base64 = buffer.toString('base64');
      const dataUri = `data:${contentType};base64,${base64}`;
      callback(dataUri);
    } catch (error) {
      callback(null);
    }
  });

  stream.on('error', () => callback(null));
}

// Clean cache
export function startCacheCleanup() {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of imageCache.entries()) {
      if (now - value.timestamp > CACHE_DURATION) {
        imageCache.delete(key);
      }
    }
  }, 10 * 60 * 1000); 
}