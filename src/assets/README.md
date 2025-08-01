# Assets Folder

This folder contains all your local images and assets.

## How to use local images:

1. **Place your images here** (e.g., `user1.jpg`, `dashboard.png`, `logo.svg`)
2. **Import them in your components** like this:

```jsx
import user1 from '../assets/user1.jpg';
import dashboard from '../assets/dashboard.png';
import logo from '../assets/logo.svg';
```

3. **Use them in your JSX**:

```jsx
<img src={user1} alt="User 1" className="w-8 h-8 rounded-full" />
<img src={dashboard} alt="Dashboard" className="w-full h-full object-cover" />
```

## Supported formats:
- JPG/JPEG
- PNG
- SVG
- WebP
- GIF

## Example file structure:
```
src/assets/
├── users/
│   ├── user1.jpg
│   ├── user2.jpg
│   └── user3.jpg
├── dashboard.png
├── logo.svg
└── hero-bg.jpg
``` 