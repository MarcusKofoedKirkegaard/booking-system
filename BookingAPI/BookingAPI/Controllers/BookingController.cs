using Microsoft.AspNetCore.Mvc;

namespace BookingAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class BookingController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<BookingController> _logger;

    public BookingController(ILogger<BookingController> logger)
    {
        _logger = logger;
    }

    //[HttpGet]
    //public IEnumerable<WeatherForecast> Get()
    //{
    //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    //    {
    //        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
    //        TemperatureC = Random.Shared.Next(-20, 55),
    //        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    //    })
    //    .ToArray();
    //}


    [HttpGet]
    [Route("Login")]
    public ActionResult Login(string? username, string? password)
    {
        // Model Binding from request to parameter 
        var correctPassword = "marcus";

        if(password == correctPassword)
        {
            //base.Redirect("/login?success&" + username + "/start");
//            return base.RedirectToAction("get", "WeatherForecast");
            return base.Redirect("localhost:3000/" + username + "/start");
        }
        else
        {
            return base.Redirect("localhost:3000/login");
        }
    }
}

