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

/* themes/gavias_edupia/templates/commerce-node/commerce-product--course--teaser.html.twig */
class __TwigTemplate_17397ea9c29f57d906a13c8249726e3de64001cc007746b54fff5140215cf3c4 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 26];
        $filters = ["escape" => 25, "t" => 27];
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
        echo "<div class=\"course-block\">      
  <div class=\"course-block-inner\">
    <div class=\"image gallery-popup\">
      ";
        // line 25
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "field_course_images", [])), "html", null, true);
        echo "
      ";
        // line 26
        if (($context["video_link"] ?? null)) {
            // line 27
            echo "        <a class=\"video-link popup-video\" href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["video_link"] ?? null)), "html", null, true);
            echo "\"><i class=\"fas fa-video\"></i> ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Preview"));
            echo "</a>
      ";
        }
        // line 29
        echo "    </div>
    <div class=\"course-content\">
      <div class=\"content-inner\">
        <div class=\"categories clearfix\">";
        // line 32
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "field_course_category", [])), "html", null, true);
        echo "</div>
        <h4 class=\"title\"><a href=\"";
        // line 33
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["product_url"] ?? null)), "html", null, true);
        echo "\" rel=\"bookmark\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
        echo "</a></h4> 
        <div class=\"course-info\">
          <div class=\"teacher clearfix\">";
        // line 35
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "field_course_teacher", [])), "html", null, true);
        echo "</div>
          <div class=\"course-sumary d-none\">";
        // line 36
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "body", [])), "html", null, true);
        echo "</div>
        </div>
      </div>  
      <div class=\"course-footer clearfix\">
        <div class=\"left\">
          <div class=\"course-price\"><div class=\"course-price-inner\">
            ";
        // line 42
        if (($context["price_display"] ?? null)) {
            // line 43
            echo "              ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["price_display"] ?? null)), "html", null, true);
            echo "
            ";
        } else {
            // line 44
            echo "  
              ";
            // line 45
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["product"] ?? null), "variation_price", [])), "html", null, true);
            echo "
            ";
        }
        // line 46
        echo "  
          </div></div>
        </div>
        <div class=\"right\"><a href=\"";
        // line 49
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["product_url"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Apply now"));
        echo "</a></div>
      </div>  
    </div>
  </div>
</div>
        ";
    }

    public function getTemplateName()
    {
        return "themes/gavias_edupia/templates/commerce-node/commerce-product--course--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  124 => 49,  119 => 46,  114 => 45,  111 => 44,  105 => 43,  103 => 42,  94 => 36,  90 => 35,  83 => 33,  79 => 32,  74 => 29,  66 => 27,  64 => 26,  60 => 25,  55 => 22,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_edupia/templates/commerce-node/commerce-product--course--teaser.html.twig", "/Users/bradleywaye/Sites/local.waye.com/themes/gavias_edupia/templates/commerce-node/commerce-product--course--teaser.html.twig");
    }
}
