# VS Code Setup Guide

This guide helps you configure VS Code for optimal development experience with this project.

## Quick Setup

1. **Install the Tailwind CSS IntelliSense extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Tailwind CSS IntelliSense"
   - Install the extension by Tailwind Labs

2. **Copy the example configuration files**
   ```bash
   cp .vscode/settings.json.example .vscode/settings.json
   cp .vscode/css_custom_data.json.example .vscode/css_custom_data.json
   ```

## What these settings provide

- **Tailwind CSS IntelliSense**: Autocomplete for Tailwind classes
- **CSS Validation**: Disabled for Tailwind directives (@tailwind, @apply, @layer)
- **String Suggestions**: Better autocomplete in JSX/TSX files
- **Custom CSS Data**: Recognition of Tailwind-specific syntax

## Why .vscode is in .gitignore

- Personal VS Code settings (themes, keybindings, etc.) are not shared
- Prevents conflicts between team members' configurations
- Keeps the repository clean and focused on code

The `.example` files provide a starting point for consistent team development.
