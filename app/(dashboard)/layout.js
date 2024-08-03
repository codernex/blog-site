import "@fontsource/inter";
import MainLoader from "./components/common/loader";
import './styles/app.scss'

export const metadata = {
    title: "Texas Bully",
    description: "Manage dog buy sell in our website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/logo/favicon.png" />
            <body>
                <MainLoader />
                {children}
            </body>
        </html>
    );
}
