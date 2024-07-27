// React Component 

const Header = () => {
    return (
    <header>
        <nav>
            <img src="react-logo.png" width="15%"/>
        </nav>
    </header>
    )
}

const Footer = () => {
    return (
            <footer>
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