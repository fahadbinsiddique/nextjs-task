# Frontend Developer Challenge - React/Next.js

This is a React/Next.js project that implements a dynamic form with input fields and select boxes. The form supports adding and removing fields, validation, and state management.

## 🚀 Features

- Input field and select box placed side by side.
- Form validation with error messages if fields are empty.
- Dynamically add multiple input fields and select boxes.
- Delete option to remove specific input/select pairs.
- Form state is displayed in real-time below the form.
- Submitted data is presented in a table format.

## 🛠️ Technologies Used

- **Next.js** (React Framework)
- **React Hooks** (useState, useEffect)
- **Tailwind CSS** (for styling)

## 📌 Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the development server**:
   ```sh
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 📂 Project Structure
```
your-project/
├── src/
│   ├── app/
│   │   ├── aboutus/
│   │   │   ├── page.jsx
│   │   ├── blog/
│   │   │   ├── page.jsx
│   │   ├── review/
│   │   │   ├── page.jsx
│   │   ├── shop/
│   │   │   ├── product/
│   │   │   │   ├── page.jsx
│   │   │   │   ├── loading.js
│   │   │   ├── page.jsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   ├── about/
│   │   │   ├── AboutHero.jsx
│   │   ├── blog/
│   │   │   ├── BlogHero.jsx
│   │   ├── Home/
│   │   │   ├── DynamicForm.jsx
│   │   │   ├── HomeHero.jsx
│   │   ├── review/
│   │   │   ├── Review.jsx
│   │   ├── shop/
│   │   │   ├── Shop.jsx
├── public/
│   ├── favicon.ico
├── styles/
│   ├── globals.css
├── .gitignore
├── next.config.mjs
├── package.json
├── README.md
```

## 📜 Usage Guide

- Fill in the input fields and select a value from the dropdown.
- Click the ➕ button to add more fields.
- Click ❌ to remove unnecessary fields.
- Submit the form to see the data displayed in a table.

## 📄 License
This project is licensed under the MIT License.

---

**💡 Need help?** Open an issue or reach out! 😊

