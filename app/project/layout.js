import Image from "next/image";
export default function ProjectLayout({ children }) {
    return (
        <div className="page">
            <div className="flex items-center justify-between mb-4">
                <h1 className="heading">Projects</h1>
                <button>Reels</button>
            </div>
            {children}
        </div>
    );
}
