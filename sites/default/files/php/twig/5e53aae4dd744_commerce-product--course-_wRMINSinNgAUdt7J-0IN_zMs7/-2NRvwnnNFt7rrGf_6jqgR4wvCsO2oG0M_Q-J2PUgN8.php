<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/gavias_edupia/templates/commerce-node/commerce-product--course--featured.html.twig */
class __TwigTemplate_0dce8dd1abcd3597aacbad4b3aefffc24077d414cdfae158a94248702b2c225c extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 27];
        $filters = ["escape" => 26, "t" => 28];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape', 't'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 22
        echo "<div class=\"featured-course-2 clearfix\">      
   <div class=\"course-block-inner\">
      <div class=\"left\">
        <div class=\"image text-center gallery-popup\">
          ";
        // line 26
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "field_course_images", [])), "html", null, true);
        echo "
          ";
        // line 27
        if (($context["video_link"] ?? null)) {
            // line 28
            echo "            <a class=\"video-link popup-video\" href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["video_link"] ?? null)), "html", null, true);
            echo "\"><i class=\"fas fa-video\"></i> ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Preview"));
            echo "</a>
          ";
        }
        // line 30
        echo "        </div>
      </div>
      <div class=\"right\">
        <div class=\"course-content\"> 
          <div class=\"course-info\"><h4 class=\"title\"><a href=\"";
        // line 34
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["product_url"] ?? null)), "html", null, true);
        echo "\" rel=\"bookmark\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
        echo "</a></h4></div>
          <div class=\"hidden\"><div class=\"cthumbnail\">";
        // line 35
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
        echo "</div><div class=\"cthumbnail\"></div></div>
          <div class=\"teacher\">";
        // line 36
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "field_course_teacher", [])), "html", null, true);
        echo "</div>
          <div class=\"course-info\"><div class=\"summary\"> ";
        // line 37
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "body", [])), "html", null, true);
        echo "</div></div>
          <div class=\"course-features\">";
        // line 38
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "field_course_features", [])), "html", null, true);
        echo "</div>
          <div class=\"course-bottom\">
            <div class=\"bottom-left\"><div class=\"course-price\">";
        // line 40
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "variation_price", [])), "html", null, true);
        echo " </div></div>
            <div class=\"bottom-right\"><a class=\"course-apply btn-theme\" href=\"";
        // line 41
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["product_url"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Apply now"));
        echo "</a></div> 
          </div>
        </div>
      </div>  
   </div>
   
</div>";
    }

    public function getTemplateName()
    {
        return "themes/gavias_edupia/templates/commerce-node/commerce-product--course--featured.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  108 => 41,  104 => 40,  99 => 38,  95 => 37,  91 => 36,  87 => 35,  81 => 34,  75 => 30,  67 => 28,  65 => 27,  61 => 26,  55 => 22,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_edupia/templates/commerce-node/commerce-product--course--featured.html.twig", "/Users/bradleywaye/Sites/local.waye.com/themes/gavias_edupia/templates/commerce-node/commerce-product--course--featured.html.twig");
    }
}
