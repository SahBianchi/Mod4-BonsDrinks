import React from 'react'
import styles from './NossoTime.module.css';

function NossoTime() {
    return (
        <div className={styles.containerNossoTime}>
            <h2 className={styles.tituloNossoTime}>Nosso Time</h2>
            <section className={styles.containerCards}>
                <div className={styles.cardNossoTime}>
                    <img src="https://images.unsplash.com/photo-1495490140452-5a226aef25d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" className={styles.imgPessoa}/>
                    <h3 className={styles.nomePessoa}>Valérie</h3>
                    <p className={styles.textoPessoa}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis quos placeat ullam odio expedita ut sit voluptatem labore fuga dicta, molestias velit tenetur ratione culpa laboriosam repellendus eligendi fugit.
                     </p>
                </div>

                <div className={styles.cardNossoTime}>
                    <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" className={styles.imgPessoa}/>
                    <h3 className={styles.nomePessoa}>Meggie</h3>
                    <p className={styles.textoPessoa}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis quos placeat ullam odio expedita ut sit voluptatem labore fuga dicta, molestias velit tenetur ratione culpa laboriosam repellendus eligendi fugit.
                     </p>
                </div>

                <div className={styles.cardNossoTime}>
                    <img src="https://images.unsplash.com/photo-1533674689012-136b487b7736?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" className={styles.imgPessoa}/>
                    <h3 className={styles.nomePessoa}>Sarah</h3>
                    <p className={styles.textoPessoa}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis quos placeat ullam odio expedita ut sit voluptatem labore fuga dicta, molestias velit tenetur ratione culpa laboriosam repellendus eligendi fugit.
                     </p>
                </div>
            </section>
        </div>
    )
}

export default NossoTime
