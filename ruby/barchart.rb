arr=[2,5,3,7,1]
max= arr.max()

for floor in max.downto 1
    for i in arr
        if(floor>i)
            print "\t";
        else
            print "* \t";
        end
    end
    puts
end

#kadanes
#fibonacci
#spiral display