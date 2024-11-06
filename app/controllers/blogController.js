
export const createBlog=async(req,res)=>{
  return  res.json({message:"Blog created successfully"});
}

export const readBlog=async(req,res)=>{
   return res.json({message:"Blog read successfully"});
}

export const updateBlog=async(req,res)=>{
   return res.json({message:"Blog ubpdate successfully"});
}

export const deleteBlog=async(req,res)=>{
  return  res.json({message:"Blog delete successfully"});
}