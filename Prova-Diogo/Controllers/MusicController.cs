using CrudMusic.Data;
using Microsoft.AspNetCore.Mvc;
using CrudMusic.Models;
using System.Linq;

namespace CrudMusic.Controllers
{
    public class MusicController
    {
         [ApiController]
        [Route("crudmusic/music")]


    public class CrudMusicController : ControllerBase
    {

         private readonly DataContext _context;
            //Construtor
            public CrudMusicController(DataContext context) => _context = context;
          
          
          
          
          //Post: /crudmusic/music/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]Music music)
        {
            _context.Musics.Add(music);
            _context.SaveChanges();
            return Created("",music);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Musics.ToList());

    }
    }
}