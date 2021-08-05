import {Link} from 'react-router-dom';

export const Navbar = () => {
    return(
        <>
            <nav className="p-4 px-8 flex-auto h-20 bg-blue-900 justify-between">
                <Link to='/'>
                <span className="font-semibold text-4xl text-white font-mono ">Quizzy</span>
                </Link>
                
          <Link className="text-gray-100 px-8" to="/scoreboard">
            Scoreboard
          </Link>
            </nav>

            
        </>
    )
}