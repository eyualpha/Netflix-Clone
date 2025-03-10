import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, X, Search, Menu } from "lucide-react";

const Navbar = () => {
  const [isScroled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  return (
    <nav
      className={`fixed  w-full z-50 transition-colors ${
        isScroled
          ? `bg-gray-900`
          : `bg-gradient-to-b from-black/80 to-transparent`
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-red-600 text-2xl font-bold">NETFLIX</span>
          </Link>
          <div className=" flex items-center space-x-8">
            <div className=" hidden md:flex items-center space-x-8">
              <form onSubmit={handleSearch} className=" relative">
                <input
                  type="text"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  placeholder="Search movie..."
                  className=" bg-black/30 placeholder-gray-400 px-4 py-2 pr-10 rounded-full border border-gray-400 focus:outline-none "
                />
                <button>
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </button>
              </form>
              <Link to="/favorites">
                <Heart className="w-6 h-6 text-white hover:text-gray-400" />
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white cursor-pointer" />
              ) : (
                <Menu className="w-6 h-6 text-white cursor-pointer" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile-Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <form onSubmit={handleSearch} className="">
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/30 text-white  placeholder-gray-400 py-2 px-4 rounded-full focus:outline-none"
                />
              </form>
                <Link 
                  to="/favorites" 
                  className="block text-white hover:text-gray-100 p-2">
                    Favorites
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
