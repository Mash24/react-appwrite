import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import Button from "../Button"
import Input from "../Input"
import RTE from "../RTE"
import Select from "../Select"
import appwriteService from "../../appwrite/config"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData);

    const Submit = async (data) => {
        if(post) {
            const file = data.image[0] ? data.image[0] : null;

            if (file) {
                appwriteService.deleteFile(post.FeaturedImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data, featuredImage: file ? file.$id : undefined
            });
            if(dbPost) {
                navigate(`/post/${dbPost.$id}`)
            } else {
                const file = await appwriteService.uploadFile(data.image[0])
                if (file) {
                    const fileId = file.$id ;
                    data.featuredImage = fileId;
                    const dbPost = await appwriteService.createPost({...data, userId: userData.$id});

                    if(dbPost) {
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
            
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/\s/g, "-")
    },[])

    React.useEffect(() => {
        watch((value, {name}) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), {shouldValidate:true})
            }
        })
    }, [watch, setValue, slugTransform])
    return(
        <form onSubmit={handleSubmit(Submit)}
        className="flex flex-wrap"
        >
            <div className="w-2/3 px-2">
                <Input className="mb-4" name="title" label="Title" placeholder= "Enter title" {...register("title", {required: true})} />
                <Input className="mb-4" name="slug" label="Slug" placeholder= "Slug" {...register("slug", {required: true})} 
                onInput = {(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), {shouldValidate:true})
                }}
                />
                <RTE>
                    label = "content:",
                    name = "content",
                    control = {control},
                    defaultValue = {getValues('content')}
                </RTE>
            </div>
            <div className="1/3 px-2">
                <input className="mb-4" type="file" id="image" accept=".jpg,.jpeg,.png,.gif" 
                {...register("image", {required: !post})}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img src={appwriteService.getFilePreview(post.FeaturedImage)} alt="{post.title}" 
                        className="rounded-lg"
                        />
                    </div>
                )}
                <select
                options = {["Active", "inactive"]}
                label = "status"
                {...register("status", {required: true})}
                />
                <button className="btn btn-primary w-full" type="submit" bgColor= {post ? "bg-blue-500" : "bg-green-500"}>
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
    )
}


export default PostForm;