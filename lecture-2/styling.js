// React Component 

const Header = () => {
    return (
    <header>
        <nav className="nav">
            <img src="react-logo.png" width="40px"/>
            <ul className="nav-item">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}

const Footer = () => {
    return (
            <footer className="footer">
                <small>© 2021 231AG development. All rights reserved.</small>
            </footer>
    )
}

const MainSection = () => {
    return (
        <div>
            <h1>The reasons why I love React!</h1>
            <ul>
                <li>React is a very popular libraby</li>
                <li>React makes it easier to find a job</li>
            </ul>
        </div>
    )

}


const MyPage = () => {
    return (
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    )
}

ReactDOM.render(<MyPage />, document.getElementById('root'))