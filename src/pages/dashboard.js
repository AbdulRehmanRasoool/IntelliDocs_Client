import { Chat } from "../components/chat";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";

export default function Dashboard() {
    return (
        <main className="page-wrapper">
            <Navbar />
            <Chat />
            <Sidebar />
        </main>
    )
}