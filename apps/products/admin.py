from django.contrib import admin
from .models import Product,Category,Color,ProductImage,Size,Tag,Banner,AdditionalInformation,Rate,BannerImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class BannerImageInline(admin.TabularInline):
    model = BannerImage
    extra = 1


class RateInline(admin.TabularInline):
    model = Rate
    extra = 1


class AdditionInline(admin.TabularInline):
    model = AdditionalInformation
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    filter_horizontal = ('tag','color','size')
    inlines = [AdditionInline,ProductImageInline, RateInline]


class BannerAdmin(admin.ModelAdmin):
    inlines = [BannerImageInline]


admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(Rate)
admin.site.register(Color)
admin.site.register(Tag)
admin.site.register(Size)
admin.site.register(AdditionalInformation)
admin.site.register(Banner,BannerAdmin)


