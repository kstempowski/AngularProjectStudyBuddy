using AngularProjectStudyBuddy.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProjectStudyBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyBuddyController : ControllerBase
    {
        private readonly StudyBuddyDBContext _context;
        public StudyBuddyController(StudyBuddyDBContext context)
        {
            _context = context;
        }


        #region Get/Read
        //GET: api/StudyBuddy
        [HttpGet]
        public async Task<ActionResult<List<QandA>>> GetAllQandA()
        {
            var questions = await _context.QandAs.ToListAsync();
            return questions;
        }

        
        //GET: api/StudyBuddy/{Qid}
        [HttpGet("{Qid}")]
        public async Task<ActionResult<QandA>> GetQandA(int Qid)
        {
            var question = await _context.QandAs.FindAsync(Qid);
            if (question == null)
            {
                return NotFound();
            }
            else
            {
                return question;
            }

        }
        #endregion

        #region Create/Post/Add
        //POST api/StudyBuddy
        [HttpPost]
        public async Task<ActionResult<QandA>> AddQandA(QandA question)
        {
            _context.QandAs.Add(question);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetQandA), new { Qid = question.Qid }, question);
        }

        #endregion

        #region Delete
        //DELETE api/StudyBuddy/{Qid}
        [HttpDelete("{Qid}")]
        public async Task<ActionResult<QandA>> DeleteQandA(int Qid)
        {
            var question = await _context.QandAs.FindAsync(Qid);
            if (question == null)
            {
                return NotFound();
            }
            else
            {
                _context.QandAs.Remove(question);
                await _context.SaveChangesAsync();
                return NoContent();
            }

        }

        #endregion

    }
}
