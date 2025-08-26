using System.Collections.Generic;
using MyApp.Models;

namespace MyApp.Repositories
{
    public interface IExampleRepository
    {
        IEnumerable<ExampleModel> FetchData();
    }
}
