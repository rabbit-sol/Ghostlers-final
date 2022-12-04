import { ConnectWallet, useAddress, useContract, useContractRead, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";


import { useState, useEffect } from 'react'

import { config } from '../dapp.config'

import Header from "../components/Header";
import Footer from "../components/Footer";



const Mint: NextPage = () => {

    const address = useAddress();
   




    const [tokenId ]= useState([0]);
    const [tokenOwner] = useState(["ownerOf"]);
    

    const checkAllOwner = async () => {

    
        


    }









    useEffect(() => {
        const init = async () => {
            const signatureDropAddress = "0xC44BDdcAb5e6587caA1991Faf2390b2D01d06604";


            const { contract } = useContract(signatureDropAddress);

            const totalSupply = useContractRead(contract, "totalSupply")?.data?.toNumber();
            console.info(totalSupply)



            for (let i = 1; i < totalSupply; i++) {
                const ownerOff = useContractRead(contract, "ownerOf", i)

                console.log(ownerOff)
            }

        }

        init()
    }, [])






    return (
        <div className="items-center justify-center bg-brand-background ">

            <div className="w-1/3  m-auto text-center items-center justify-center bg-brand-background ">
            <button
               
                onClick={() => {
                    checkAllOwner()

                }}
            >
                Check Owner
            </button>
                </div>

            <table className="w-full">
                <tr className="w-1/2 bg-indigo-300">
                    <td className="p-2 w-2/3">Server Name</td>
                    <td className="p-2 text-center">Status</td>

                </tr>
           
                <tr className="">
                    {tokenId.map(tokenId => (
                        <td className="p-2">{tokenId}</td>
                    )
                    )}
                    {tokenOwner.map(tokenOwner => (
                        <td className="p-2 text-center text-green-600">{tokenOwner}</td>
                    ))}

                </tr>
            </table>

           
        </div>
    )
}


export default Mint;
