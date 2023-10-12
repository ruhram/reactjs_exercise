export default function Item({ item, onDeleteItem, onToggleitem}){
    return (
              <li key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={() => onToggleitem(item.id)} />
                <span style={ item.checked ? {textDecoration : 'line-through'} : {}}>
                  {item.quantity} {item.name}
                </span>
                <button onClick={() => onDeleteItem(item.id)}>&times;</button>
              </li>
    );
  }