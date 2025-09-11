# 🌍 Contributing to GitHub Readme Educational Badge

Thank you for your interest in contributing to this project! We especially welcome contributions for **new language translations**.

## 🗣️ Adding a New Language Translation

### Step 1: Check if your language is already supported

Currently supported languages:
- 🇺🇸 **English** (`en`)
- 🇧🇷 **Portuguese** (`pt`)

If your language is not listed, follow the steps below to add it!

### Step 2: Fork and Clone

1. Fork this repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/Glauedson/github-readme-educational-badge.git
cd github-readme-educational-badge
```

### Step 3: Add Your Translation

Navigate to the translations file: `src/translations/translations.js`

Add your language translation following this structure:

```javascript
export const translations = {
  // Add your language here (replace 'xx' with your language code)
  xx: {
    course: "YOUR_TRANSLATION_FOR_COURSE",
    institution: "YOUR_TRANSLATION_FOR_INSTITUTION",
    completion: "YOUR_TRANSLATION_FOR_COMPLETION:",
    institutionLogo: "YOUR_TRANSLATION_FOR_INSTITUTION_LOGO",
    errors: {
      invalidParameters: "YOUR_TRANSLATION_FOR_INVALID_PARAMETERS",
      invalidProgress: "YOUR_TRANSLATION_FOR_INVALID_PROGRESS_MESSAGE",
      internalError: "YOUR_TRANSLATION_FOR_INTERNAL_ERROR",
      nameRequired: "YOUR_TRANSLATION_FOR_NAME_REQUIRED",
      courseRequired: "YOUR_TRANSLATION_FOR_COURSE_REQUIRED",
      degreeRequired: "YOUR_TRANSLATION_FOR_DEGREE_REQUIRED",
      progressRequired: "YOUR_TRANSLATION_FOR_PROGRESS_REQUIRED"
    }
  }
};
```

### Step 4: Language Code Guidelines

Use the standard **ISO 639-1** language codes:

| Language | Code | Flag |
|----------|------|------|
| Spanish | `es` | 🇪🇸 |
| French | `fr` | 🇫🇷 |
| German | `de` | 🇩🇪 |
| Italian | `it` | 🇮🇹 |
| Japanese | `ja` | 🇯🇵 |
| Korean | `ko` | 🇰🇷 |
| Chinese (Simplified) | `zh` | 🇨🇳 |
| Russian | `ru` | 🇷🇺 |

### Step 5: Translation Example

Here's an example for English (`en`):

```javascript
en: {
    course: "COURSE",
    institution: "INSTITUTION",
    completion: "COMPLETION:", 
    institutionLogo: "Institution Logo",
    errors: {
      invalidParameters: "Invalid parameters",
      invalidProgress: "Progress must be a number between 0 and 100",
      internalError: "Internal server error generating badge", 
      nameRequired: "name is required",
      courseRequired: "course is required",
      degreeRequired: "degree is required", 
      progressRequired: "progress is required"
    }
}
```

### Step 6: Test Your Translation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Test your translation by visiting:
```
http://localhost:3000/XX/badge?name=Test&course=Test&degree=Test&progress=50
```
Replace `XX` with your language code.

### Step 7: Update Documentation

Add your language to the README.md:

1. Update the "Supported Languages" table
2. Add an example badge in your language

### Step 8: Submit Your Pull Request

1. Create a new branch:
```bash
git checkout -b add-language-XX
```

2. Commit your changes:
```bash
git add .
git commit -m "Add XX (Language Name) translation support"
```

3. Push to your fork:
```bash
git push origin add-language-XX
```

4. Open a Pull Request on GitHub with:
   - **Title:** `Add [Language Name] (xx) translation support`
   - **Description:** Brief description of the language added and any notes

## 📋 Translation Guidelines

### ✅ Do:
- Keep translations **concise** and **professional**
- Use **UPPERCASE** for labels like "COURSE", "INSTITUTION" 
- Add colon (`:`) after "COMPLETION" equivalent
- Test your translation thoroughly
- Follow the exact same structure as existing translations

### ❌ Don't:
- Don't change the structure of the translations object
- Don't use informal language
- Don't forget to translate error messages
- Don't use language codes that are not ISO 639-1 standard

## 🐛 Other Types of Contributions

### Bug Reports
- Use the GitHub Issues tab
- Provide clear steps to reproduce
- Include browser/environment information

### Feature Requests
- Check existing issues first
- Clearly describe the feature
- Explain the use case

### Code Improvements
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly

## 🏆 Contributors

All translation contributors will be credited in the README! Thank you for helping make this project accessible worldwide.

## 📞 Need Help?

- Open an issue on GitHub
- Check existing issues and discussions
- Review the project documentation

---

**Happy Contributing! 🚀**