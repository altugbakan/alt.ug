import React, { useState, useEffect, useMemo } from "react";
import { ethers } from "ethers";
import Visitor from "../utils/Visitor.json";

const CONTRACT_ADDRESS = "0x047f3bA5A5550453acA5501C3eceef47019F9477";
const CHAIN_ID = "0xa"; // Optimism
const OPTIMISM_MAINNET_PARAMS = {
    chainId: "0xa",
    chainName: "Optimism",
    nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: ["https://mainnet.optimism.io/"],
    blockExplorerUrls: ["https://optimistic.etherscan.io/"]
}


const VisitorNFT = (props) => {
    const [walletState, setWalletState] = useState("Not Connected");
    const [currentAccount, setCurrentAccount] = useState("");
    const [chainId, setChainId] = useState("");
    const [image, setImage] = useState("");

    const { ethereum } = window;
    const signer = (new ethers.providers.Web3Provider(ethereum)).getSigner();
    const visitorContract = useMemo(() => new ethers.Contract(CONTRACT_ADDRESS, Visitor.abi, signer), [signer]);

    // Check if wallet is connected
    useEffect(() => {
        const checkWalletConnected = async () => {

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) { // Already connected
                setCurrentAccount(accounts[0]);
                setChainId(await ethereum.request({ method: "eth_chainId" }));
            }
        }
        checkWalletConnected();
        ethereum.on("accountsChanged", checkWalletConnected);
        ethereum.on("chainChanged", (_chainId) => window.location.reload());
    }, [ethereum]);



    // Update wallet state
    useEffect(() => {
        const getNFTImage = async () => {
            const token = await visitorContract.tokenOf(currentAccount);

            const nftData = JSON.parse(window.atob((await visitorContract.tokenURI(token)).split(',')[1]));

            setImage(nftData["image"]);
        }
        const getWalletState = async () => {
            const token = await visitorContract.balanceOf(currentAccount);
            if (token > 0) {
                setWalletState("Minted");
                await getNFTImage();
            } else {
                setWalletState("Not Minted");
            }
        }
        if (currentAccount !== "" && chainId === CHAIN_ID) {
            getWalletState();
        }
    }, [ethereum, currentAccount, chainId, signer, visitorContract]);

    const connectWallet = async () => {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        setChainId(await ethereum.request({ method: "eth_chainId" }));

        if (chainId !== CHAIN_ID) {
            try {
                await ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0xa" }],
                });
                window.location.reload();
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902 || switchError?.data?.orginalError?.code === 4902) {
                    try {
                        await ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [OPTIMISM_MAINNET_PARAMS],
                        });
                    } catch {
                        return;
                    }
                }
            }
        }
        setCurrentAccount(accounts[0]);
        setChainId(await ethereum.request({ method: "eth_chainId" }));
    }

    const mint = async () => {
        visitorContract.on("Transfer", (_from, _to, _tokenId) => {
            setWalletState("Minted");
        });

        setWalletState("Minting");

        try {
            await visitorContract.mint();
        } catch {
            setWalletState("Not Minted");
        }
    }

    const renderWalletState = () => {
        switch (walletState) {
            case "Not Minted":
                return (
                    <div className="flex flex-row justify-center">
                        <button onClick={mint} className="bg-zinc-400 hover:bg-zinc-600 rounded px-2">Mint NFT</button>
                    </div>
                );

            case "Minting":
                return (
                    <p className="text-white text-center">Minting...</p>
                );

            case "Minted":
                return (
                    <>
                        <div className="flex flex-row justify-center">
                            <img src={image} alt="Visitor NFT" />
                        </div>
                        <p className="text-white text-center mt-2">You have minted your NFT!</p>
                    </>
                );

            default:
                return (
                    <>
                        <p className="text-white text-center mb-2">Thanks for visiting my page. Connect your wallet to get a free NFT.</p>
                        <div className="flex flex-row justify-center">
                            <button onClick={connectWallet} className="bg-zinc-400 hover:bg-zinc-600 rounded px-2">
                                {
                                    currentAccount === "" ? "Connect Wallet" : "Switch to Optimism"
                                }
                            </button>
                        </div>
                    </>
                );
        }
    }

    return (
        <div className={props.className}>
            <h2 className="text-white text-2xl font-bold mb-4">Visitor NFT</h2>
            {renderWalletState()}
        </div>
    );
}

export default VisitorNFT;