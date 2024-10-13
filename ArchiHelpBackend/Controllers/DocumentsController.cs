using Microsoft.AspNetCore.Mvc;

namespace ArchiHelpBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        // Пример статического списка документов для тестирования
        private static readonly List<Document> documents = new List<Document>
    {
        new Document { Id = 1, Title = "Документ 1", Description = "Описание документа 1" },
        new Document { Id = 2, Title = "Документ 2", Description = "Описание документа 2" },
        new Document { Id = 3, Title = "Документ 3", Description = "Описание документа 4" }
    };

        [HttpGet]
        public IActionResult Search([FromQuery] string search)
        {
            
            var results = documents.Where(d => d.Title.Contains(search, StringComparison.OrdinalIgnoreCase)).ToList();
            return Ok(results);
        }
    }
}


public class Document
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
}