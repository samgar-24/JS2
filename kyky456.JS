let n=10;
Sandar:
for(i=2;i<=n;i++)
{
for (let j = 2; j < i; j++) 
{ 
    if (i % j == 0) continue Sandar;
  }

  alert( i ); 
}
