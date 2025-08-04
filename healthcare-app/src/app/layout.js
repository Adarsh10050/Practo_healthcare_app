import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Your Health App',
  description: 'Find and Book Doctors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
