import type { NextPage } from 'next'

import { foo } from '../example'

const Home: NextPage = () => {
  return (
    <div>{foo('world')}</div>
  )
}

export default Home

