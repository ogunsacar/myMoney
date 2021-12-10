import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

export default function TransactionList({documents}) {

    const {deleteDocument} = useFirestore('transactions')

    return (
        <ul className={styles.transactions}>
            {documents.map((doc)=>(
                <li key={doc.id}>
                    <p className={styles.name}>{doc.name}</p>
                    <p className={styles.amount}>${doc.amount}</p>
                    <button onClick={()=> deleteDocument(doc.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}
