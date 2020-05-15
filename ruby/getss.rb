def getss(str)
    if str.length()==0
        bres=[]
        bres.push("")
        return bres
    end
    ch = str[0,1]

    ros= str[1,str.length-1]
    rres=getss(ros)
    mres=[]

    for i in(0..rres.length-1)
        mres.push(ch+rres[i])
        mres.push("-"+rres[i])
    end
    return mres
end

puts getss("abc")