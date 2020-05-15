n= ARGV[0].to_i;
m= ARGV[1].to_i;
ARGV.clear();

arr=[];
for i in (0..n-1)
    row=[];
    for j in (0..m-1)
        val= gets.chomp.to_i;
        row.push(val);
    end
    arr.push(row);
end

def displaySpiral(arr)
    left=0
    right= m-1;
    up=0;
    down=n-1;
    while(left<=right && up<=down )
        for i in (left..right)
            print arr[i][up]
            print " ";
        end
        up+=1
        for j in (up..down)
            
    end

end
