function LeftColumn()
{
    const Left_Image = document.querySelector('.Image_Left');
    const Right_Image = document.querySelector('.Image_Right');
    const Left_Container = document.querySelector('.Container_Image_Left');
    const Right_Container = document.querySelector('.Container_Image_Right');

    Left_Container.style.width = '100%';
    Right_Container.style.width = '0%';
    Left_Image.style.display = 'block';
    Right_Image.style.display = 'none';
}

function BothColumns()
{
    const Left_Image = document.querySelector('.Image_Left');
    const Right_Image = document.querySelector('.Image_Right');
    const Left_Container = document.querySelector('.Container_Image_Left');
    const Right_Container = document.querySelector('.Container_Image_Right');

    Left_Container.style.width = '100%';
    Right_Container.style.width = '100%';
    Left_Image.style.display = 'block';
    Right_Image.style.display = 'block';
}

function RightColumn()
{
    const Left_Image = document.querySelector('.Image_Left');
    const Right_Image = document.querySelector('.Image_Right');
    const Left_Container = document.querySelector('.Container_Image_Left');
    const Right_Container = document.querySelector('.Container_Image_Right');

    Left_Container.style.width = '0%';
    Right_Container.style.width = '100%';
    Left_Image.style.display = 'none';
    Right_Image.style.display = 'block';
}