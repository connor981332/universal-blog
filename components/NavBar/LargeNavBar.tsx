export default function LargeScreenNavBar({ categories }: { categories:Array<String> }) {
    return (
        <div className="hidden md:block">
            <div className="left-0 right-0 flex justify-center">
                {categories.map((category, index) => (
                    <p key={index} className="text-lg mx-4">{category}</p>
                ))}
            </div>
        </div>

    )
}