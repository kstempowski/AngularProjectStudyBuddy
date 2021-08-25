using AngularProjectStudyBuddy.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProjectStudyBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        private readonly StudyBuddyDBContext _context;
        public FavoriteController(StudyBuddyDBContext context)
        {
            _context = context;
        }
        //GET: api/favorite/{UserName}
        [HttpGet("{UserName}")]
        public async Task<ActionResult<Favorite>> GetFavorites(string UserName)
        {
            var favorites = await _context.Favorites.FindAsync(UserName);

            if (favorites.UserName == UserName)
            {
                return favorites;
            }
            else
            {
                return NotFound();
            }
        }
    }
}
