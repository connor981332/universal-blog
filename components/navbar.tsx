import * as universalBlogAPI from '../src/apis/universalBlogApi';

export default async function NavBar() {
    const categories = await universalBlogAPI.getCategories();
    return (
        <div>
            <div className="h-2"></div>
            <div className="left-0 right-0 w-full h-0.5 bg-black"></div>
            <div className="h-1"></div>
            <div className="left-0 right-0 flex justify-center">
                <p className="text-lg font-bold mx-4">Word1</p>
                <p className="text-lg font-bold mx-4">Word2</p>
                <p className="text-lg font-bold mx-4">Word3</p>
                <p className="text-lg font-bold mx-4">Word4</p>
                <p className="text-lg font-bold mx-4">Word5</p>
            </div>
            <div className="h-1"></div>
            <div className="left-0 right-0 w-full h-0.5 bg-black"></div>
            <div className="h-2"></div>
        </div>
    );
}