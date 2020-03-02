import * as React from 'react'
import Item from '../item'

export default function DragDropSandbox() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Item name="Coffee" />
        <Item name="Tea" />
        <Item name="Cacao" />
      </div>
    </div>
  )
}
