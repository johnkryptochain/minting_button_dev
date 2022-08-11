import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Counter = styled("div")`
    width: 100%;
    height: 30px;
    padding: 0px;
    display: flex;
    justify-content: between;
    items-align: center;
`
const CountButton = styled("button")`
    background-color: #384457;
    border-radius: 6px;
    border: 2px solid #384457;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;

    &:hover {
        border:2px solid #2e3847;
        background-color: #2e3847;
    }
`
export const MintCounter = ({ mintCount, totalPrice, handleMintCount }: { mintCount: number, totalPrice: number, handleMintCount: (type: string) => void }) => {
    return (
        <>
            <div style={{ display: "flex", margin: "0.75rem 0" }}>
                <Typography variant="body2" color="textSecondary" style={{ marginRight: "0.5rem" }}>
                    Total price (tx included) :
                </Typography>
                <Typography
                    color="textPrimary"
                    style={{ marginRight: "0.25rem", fontWeight: 'bold' }}
                >
                    {totalPrice}
                </Typography>
                <Typography
                    color="textPrimary"
                    style={{ marginRight: "0.25rem" }}
                >
                    SOL
                </Typography>
            </div>

            <Counter>
                <CountButton style={{ flexGrow: "1" }} onClick={() => handleMintCount("decrement")}>
                    -
                </CountButton>
                <input type="text" value={mintCount} style={{ width: "100%", textAlign: "center", flexGrow: "1", margin: "0 4px" }} readOnly />
                <CountButton style={{ flexGrow: "1" }} onClick={() => handleMintCount("increment")}>
                    +
                </CountButton>
            </Counter>
        </>
    )
}