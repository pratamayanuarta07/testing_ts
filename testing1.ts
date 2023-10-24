const soal1 = (pesan: string) =>
{
    var banyak = 0;
for (let i = 0; i < pesan.length; i+=3) {
    if (pesan.toUpperCase().charAt(i) != 'S') {
        //console.log(pesan.toUpperCase().charAt(i));
        banyak ++;
    }
    if (pesan.toUpperCase().charAt((i+1)) != 'O') {
        //console.log(pesan.toUpperCase().charAt(i+1));
        banyak++;
    }
    if (pesan.toUpperCase().charAt((i+2)) != 'S') {
        //console.log(pesan.toUpperCase().charAt(i+1));
        banyak++;
    }
    
}
return banyak;
}

const soal2 = (bill:number[], k:number, b:number) =>
{
    var tot = bill.reduce((total, c, i) => 
    {
    if (i != k) {
        total+= c;
    }
    return total;  
    },0);
    var last = tot/2;
    if (last < b) {
        var true_tot =Math.abs((tot/2) - b);
        console.log(true_tot);    
    }
    else{
        console.log('Bon Appetti');
    }
}



const soal1ver2 = (pesan: string):any =>
{
    try {
        if (pesan.length >= 1 && pesan.length <= 99) {
            if (pesan.length %3 == 0) {
                var banyak = 0;
                for (let i = 0; i < pesan.length; i+=3) {
                    if (pesan.toUpperCase().charAt(i) != 'S') {
                        //console.log(pesan.toUpperCase().charAt(i));
                        banyak ++;
                    }
                    if (pesan.toUpperCase().charAt((i+1)) != 'O') {
                        //console.log(pesan.toUpperCase().charAt(i+1));
                        banyak++;
                    }
                    if (pesan.toUpperCase().charAt((i+2)) != 'S') {
                        //console.log(pesan.toUpperCase().charAt(i+1));
                        banyak++;
                    }
                    
                }
                return banyak;
            }
            else{
                throw new Error("Panjang Bukan Kelipatan 3");
            }
        }
        else{
            throw new Error("Panjang KUrang Atau Melebihi");
        }
    } catch (e:any) {
        console.log(e.message);
    }  
}

const soal2ver2 = (bill:number[], k:number, b:number) =>
{
    try {
        var sum = bill.reduce((total,c,i) =>
        {
            return total+=c;
        },0);
        if (b <= sum) {
            var tot = bill.reduce((total, c, i) => 
            {
            if (i != k) {
                total+= c;
            }
            return total;  
            },0);
            var last = tot/2;
            if (last < b) {
                var true_tot =Math.abs((tot/2) - b);
                console.log(true_tot);    
            }
            else{
                console.log('Bon Appetti');
            }
        }
        else{
            throw new Error("B melebihi total bill");
        }
    } catch (error:any) {
        console.log(error.message);
    }
}
soal2ver2([3,10,2,9],1,25);
// console.log(soal1ver2('sossso'));
