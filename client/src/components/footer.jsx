const Footer = () => {
    return (<>
        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p className="mb-1">
                    &copy; {new Date().getFullYear()} XYZ Public School. All rights
                    reserved.
                </p>
                <small>Designed & Developed by Pavan C H</small>
            </div>
        </footer>
    </>)
}

export default Footer;