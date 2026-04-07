# Contributing to Movie Discovery App

First off, thank you for considering contributing to Movie Discovery App! It's people like you that make this project better.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other applications**

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write clear commit messages**
6. **Submit a pull request**

## Development Process

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/react-movie-app.git
cd react-movie-app

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your TMDb API key

# Start development server
npm run dev
```

### Coding Standards

#### JavaScript/React
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

#### CSS
- Use CSS variables for theming
- Follow BEM naming convention when appropriate
- Keep styles modular (component-specific)
- Ensure responsive design

#### Git Commits
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests

Example:
```
Add movie trailer feature

- Integrate YouTube API
- Add trailer button to movie details
- Handle missing trailers gracefully

Closes #123
```

### Testing

Before submitting a pull request:

1. **Test all features** manually
2. **Check responsive design** on different screen sizes
3. **Test in different browsers** (Chrome, Firefox, Safari)
4. **Verify no console errors**
5. **Check accessibility** (keyboard navigation, screen readers)

### Project Structure

When adding new features, follow the existing structure:

```
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── context/       # Context providers
├── services/      # API and external services
├── hooks/         # Custom React hooks
└── styles/        # Global styles
```

## Style Guide

### Component Template

```jsx
import { useState, useEffect } from 'react'
import './ComponentName.css'

/**
 * ComponentName - Brief description
 * @param {Object} props - Component props
 * @param {string} props.title - Prop description
 */
function ComponentName({ title }) {
  const [state, setState] = useState(null)

  useEffect(() => {
    // Effect logic
  }, [])

  const handleAction = () => {
    // Handler logic
  }

  return (
    <div className="component-name">
      {/* Component JSX */}
    </div>
  )
}

export default ComponentName
```

### CSS Template

```css
/* ===================================
   Component Name Styles
   =================================== */

.component-name {
  /* Layout */
  display: flex;
  
  /* Spacing */
  padding: var(--spacing-md);
  
  /* Colors */
  background-color: var(--bg-primary);
  
  /* Typography */
  font-size: 1rem;
  
  /* Effects */
  transition: var(--transition);
}

/* Responsive */
@media (max-width: 768px) {
  .component-name {
    padding: var(--spacing-sm);
  }
}
```

## Feature Requests

We love feature requests! Before submitting:

1. **Check existing issues** to avoid duplicates
2. **Provide clear use cases**
3. **Explain the benefits**
4. **Consider implementation complexity**

## Questions?

Feel free to:
- Open an issue with the "question" label
- Check existing documentation
- Review closed issues for similar questions

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
