import Project from "./Project";

const Projects = () => {
    return (
        <div>
            <h2 className="text-white text-2xl font-bold mb-2">Projects:</h2>
            <ul className="text-white list-disc">
                <li className="mb-2">
                    <Project href="https://github.com/altugbakan/arduino-spotify-controller" title="Arduino Spotify Controller"
                        text="Allows you to control your Spotify player using Arduino Oplà IoT Kit and Spotify Web API." />
                </li>
                <li className="mb-2">
                    <Project href="https://github.com/theloanstream/thels" title="The Loan Stream"
                        text="DeFi protocol that allows you to borrow Superfluid money streams without selling your collateral." />
                </li>
                <li className="mb-2">
                    <Project href="https://cryptogum.shop" title="Crypto Gums"
                        text="Personalized generative Gum NFTs on Polygon blockchain." />
                </li>
                <li className="mb-2">
                    <Project href="https://github.com/altugbakan/stellar-quest-go" title="Stellar Quest Go"
                        text="Solutions for Stellar Quest in Go using the Stellar Go SDK." />
                </li>
                <li className="mb-2">
                    <Project href="https://vanitymonkeygenerator.gitbook.io/vanity-monkey-generator/" title="Vanity MonKey Generator"
                        text="Generates an account with a custom MonKey for Banano cryptocurrency." />
                </li>
            </ul>
        </div>
    )
}
export default Projects;