using Back.Domain.IRepositories;
using Back.Domain.IServices;
using Back.Persistence.Context;
using Back.Persistence.Repositories;
using Back.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Conexion a la base de datos --noestoysegurodeloquehagoayudaaa--
builder.Services.AddDbContext<AplicationDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("Conexion"), new MySqlServerVersion("8.0.33")));

//Services que JB añade
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<ILoginService, LoginService>();

//Repositorie que JB añade
builder.Services.AddScoped<IUsuarioRepositorie, UsuarioRepositorie>();
builder.Services.AddScoped<ILoginRepositorie, LoginRepositorie>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
