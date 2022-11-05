import { createRoot } from 'react-dom/client';
import SecondWindow from './SecondWindow';

const container = document.getElementById('root2')!;
console.log({ container });

const root = createRoot(container);
root.render(<SecondWindow />);
