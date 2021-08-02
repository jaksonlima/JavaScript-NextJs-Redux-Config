import Link from "next/link";
import { connect } from "react-redux";

import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import Head from "next/head";

function Store({ login }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {login.getIn(["loading"], false) ? (
        <Loader />
      ) : (
        <div>
          <Link href="/">
            <a className={styles.store}>Voltar</a>
          </Link>
          <div>
            <div className={styles.box}>
              <h3>Dados redux</h3>
              <ul>
                {Object.keys(login).map((key) => (
                    <li key={key}>
                      <span>{key}: </span>
                      <span>{`${login[key]}`}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Store);
