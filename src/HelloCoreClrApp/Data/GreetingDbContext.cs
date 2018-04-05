using System.Threading.Tasks;
using HelloCoreClrApp.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace HelloCoreClrApp.Data
{
    public class GreetingDbContext : DbContext
    {
        public GreetingDbContext(DbContextOptions options)
            : base(options)
        { }

        public DbSet<Greeting> Greetings { get; set; }

        public async Task EnsureCreated() => await Database.EnsureCreatedAsync();
    }
}