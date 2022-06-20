import type { NextPage } from 'next'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { useState } from 'react'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }]
  }
]

const Home: NextPage = () => {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <div>
      <Slate
        editor={editor}
        value={initialValue}
      >
        <Editable />
      </Slate>
    </div>
  )
}

export default Home

