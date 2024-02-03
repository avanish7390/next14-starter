import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2>NOT FOUND</h2>
            <p>I AM REALLY SORRY, THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST.</p>
            <Link href="/">Return Home</Link>
        </div>
    );
};

export default NotFound;