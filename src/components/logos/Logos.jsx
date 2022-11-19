import styles from "./Logos.module.css"

function Logos() {
    return (
        <div className={styles.logos}>
            <ul>
                <li><img src="./logos/H&M.svg" alt="" /></li>
                <li><img src="./logos/obey.svg" alt="" /></li>
                <li><img src="./logos/shopify.svg" alt="" /></li>
                <li><img src="./logos/lacoste.svg" alt="" /></li>
                <li><img src="./logos/levis.svg" alt="" /></li>
                <li><img src="./logos/amazon.svg" alt="" /></li>
            </ul>
        </div>
    )
}
export default Logos;