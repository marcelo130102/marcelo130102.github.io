import Image from 'next/image'
import Layout from '../components/Layout'
import Error from './_error'
import styles from '../styles/Page.module.css'

export default function GitHub({ user, statusCode }) {
  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <Layout footer={false}>
      <div className={styles.page}>
        <div className={styles.githubCard}>
          <div className={styles.githubAvatarWrap}>
            <Image
              src={user.avatar_url}
              alt={user.name}
              width={120}
              height={120}
              className={styles.githubAvatar}
            />
          </div>
          <h1 className={styles.githubName}>{user.name}</h1>
          {user.bio && <p className={styles.githubBio}>{user.bio}</p>}
          <div className={styles.githubActions}>
            {user.blog && (
              <a href={user.blog} target="_blank" rel="noopener noreferrer" className="btn-outline">
                My Blog
              </a>
            )}
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Go to GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/marcelo130102')
  const data = await res.json()
  const statusCode = res.status > 200 ? res.status : false
  return {
    props: {
      user: data,
      statusCode: statusCode || null,
    },
  }
}
