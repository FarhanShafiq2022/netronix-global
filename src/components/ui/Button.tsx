import {ArrowUpRight} from "lucide-react"; import {Link} from "react-router-dom"; import {motion} from "framer-motion";
type Props={to:string;children:React.ReactNode;variant?:'primary'|'outline'|'dark';arrow?:boolean};
export default function Button({to,children,variant='primary',arrow=true}:Props){return <motion.div whileHover={{y:-3}} whileTap={{scale:.98}} className="inline-flex"><Link to={to} className={`btn-core ${variant==='primary'?'btn-primary-core':variant==='dark'?'btn-dark-core':'btn-outline-core'}`}>{children}{arrow&&<ArrowUpRight size={14}/>}</Link></motion.div>}
