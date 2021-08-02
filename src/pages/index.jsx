import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "../styles/Home.module.css";
import { Creators as CreatorsLogin} from "../store/reducers/login";
import { Creators as CreatorsHome} from "../store/reducers/home";

function Home({ loadingHome, loadingHomeSuccesss}) {
  const dispatch = useDispatch()
  const router = useRouter()
  const [value, setValue] = useState({})

  const dispatchLogin = () => {
    router.push('/store')
    
    const objectLoginRequest = CreatorsLogin.loginRequest({
      ...value
    });

    dispatch(objectLoginRequest);
  };

  useEffect(() => {
    if(!loadingHome) {
      alert('Ambiente de teste Redux (email, senha) fake.')

      loadingHomeSuccesss({ loadingHome: true })
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.message}>
              <h3>Vamos contar para você.</h3>
              <p>Sentimos muito sua falta!</p>
              <p>Bem vindo de volta.</p>
            </div>
            <div className={`${styles.input} ${styles.custominput}`}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="email"
                onChange={env => setValue({ ...value, [env.target.name]: env.target.value })}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="senha"
                onChange={env => setValue({ ...value, [env.target.name]: env.target.value })}
              />
            </div>
          </div>
          <div className={`${styles.footer} ${styles.custombutton}`}>
            <span style={{ color: "#c9d1d9" }}>
              Não tem conta? <a style={{ color: "white" }}>Registar</a>
            </span>
            <button onClick={dispatchLogin}>Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ home }) => (home)

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadingHomeSuccesss: CreatorsHome.loadingHomeSuccesss
}, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Home)