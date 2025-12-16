interface SettingsCardProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}

export default function SettingsCard({ title, description, children, className = "" }: SettingsCardProps) {
    return (
        <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${className}`}>
            <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
            </div>
            {children}
        </div>
    );
}
